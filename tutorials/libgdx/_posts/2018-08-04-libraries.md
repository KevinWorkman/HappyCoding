---
layout: tutorial
title: Libraries
thumbnail: /tutorials/libgdx/images/libraries-3.png
tagline: Cross-platform code. 
sort-key: 800
meta-title: LibGDX Libraries
meta-description: Use cross-platform libraries to expand libGDX functionality.
meta-image: /tutorials/libgdx/images/libraries-2.png
tags: [tutorial, libgdx]
---

{% include toc.md %}

One of the best things about libGDX is that you can use it to deploy to multiple platforms: as an Android app, embedded in a webpage, or as an executable desktop application. However, this also means that you can't just use any library with libGDX: Java libraries don't work in Android or as a webpage, Android libraries don't work on desktop or the web, and JavaScript libraries don't work as a Java application or Android app.

However, libGDX offers several libraries that are compatible with libGDX: in other words, they'll work no matter which platform you deploy to. These libraries allow you to expand the functionality offered by libGDX and take your code to the next level.

# LibGDX Project Generator Tool

Remember that libGDX comes with a generator tool, which you can use to easily setup the projects required by libGDX. You can also use this generator tool to include libraries in those projects.

Run the project generator tool, and notice the **Extensions** section towards the bottom of the window. These are the compatible libraries you can add to libGDX. To add a library to your libGDX project, check the corresponding box and then click the `Generate` button.

# Library Documentation

The rest of this tutorial will use Box2D, but the process for using other libraries is very similar.

- Check the corresponding box in the project generator tool to include the library you want to use.
- Look up the documentation for that library. The [libGDX wiki](https://github.com/libgdx/libgdx/wiki) is a good place to start, but Google is also your friend for finding documetnation.
- Use the classes and functions from the library in your code.

The specifics of each step will change depending on which library you're trying to use, but this general approach will apply across the board.

# Box2D

Box2D is a library that provides physics functionality: realistic collision detection, rotation and speed, gravity and friction. It's used in games that require a realistic physic simulation, such as [Crayon Physics](http://www.crayonphysics.com/) and [Fantastic Contraption](http://fantasticcontraption.com/).

LibGDX has a great Box2D tutorial [here](https://github.com/libgdx/libgdx/wiki/Box2d). If you need more specific information, it's worth noting that Box2D was originally a C++ library, and its original documentation is [here](https://box2d.org/documentation/). Most of the originaly C++ documentation still applies to the Java port that libGDX uses.

Run the project generator tool, fill out the information for a new game, check the `Box2D` box, and then click the `Generate` button.

# Example

This tutorial is meant to be a general guide to using libraries, rather than a guide to using Box2D. Plus the [libGDX Box2D tutorial](https://github.com/libgdx/libgdx/wiki/Box2d) is already quite good. So I won't spend a lot of time introducing the concepts used by Box2D here- consult the Box2D tutorial for that.

But just to show an example that uses a libGDX library, here's a "game" that uses Box2D:

```java
package io.happycoding.physicsgame;

import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.InputAdapter;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.OrthographicCamera;
import com.badlogic.gdx.math.MathUtils;
import com.badlogic.gdx.math.Vector2;
import com.badlogic.gdx.math.Vector3;
import com.badlogic.gdx.physics.box2d.Body;
import com.badlogic.gdx.physics.box2d.BodyDef;
import com.badlogic.gdx.physics.box2d.Box2DDebugRenderer;
import com.badlogic.gdx.physics.box2d.CircleShape;
import com.badlogic.gdx.physics.box2d.EdgeShape;
import com.badlogic.gdx.physics.box2d.PolygonShape;
import com.badlogic.gdx.physics.box2d.World;

public class PhysicsGame extends ApplicationAdapter {
	World world;
	OrthographicCamera camera;
	Box2DDebugRenderer debugRenderer;

	@Override
	public void create () {
		world = new World(new Vector2(0, -10), true);
		camera = new OrthographicCamera(50, 25);
		debugRenderer = new Box2DDebugRenderer();

		// ground
		createEdge(BodyDef.BodyType.StaticBody, -20, -10f, 20, -10f, 0);
		// left wall
		createEdge(BodyDef.BodyType.StaticBody, -20, -10, -20, 10, 0);
		// right wall
		createEdge(BodyDef.BodyType.StaticBody, 20, -10, 20, 10, 0);

		createCircle(BodyDef.BodyType.DynamicBody, 0, 0, 1, 3);

		Gdx.input.setInputProcessor(new InputAdapter() {

			@Override
			public boolean touchDown (int x, int y, int pointer, int button) {

				Vector3 touchedPoint = new Vector3(Gdx.input.getX(), Gdx.input.getY(), 0);
				camera.unproject(touchedPoint);

				if(MathUtils.randomBoolean()) {
					createBox(BodyDef.BodyType.DynamicBody, touchedPoint.x, touchedPoint.y, 1, 1, 1);
				}
				else{
					createCircle(BodyDef.BodyType.DynamicBody, touchedPoint.x, touchedPoint.y, 1, 3);
				}

				return true;
			}
		});
	}

	@Override
	public void render () {
		Gdx.gl.glClearColor(.125f, .125f, .125f, 1);
		Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);

		debugRenderer.render(world, camera.combined);
		world.step(1 / 60f, 6, 2);
	}
	
	@Override
	public void dispose () {
		world.dispose();
		debugRenderer.dispose();
	}

	private Body createBox(BodyDef.BodyType type, float x, float y, float width, float height, float density) {
		PolygonShape poly = new PolygonShape();
		poly.setAsBox(width, height);

		BodyDef def = new BodyDef();
		def.type = type;
		Body body = world.createBody(def);
		body.createFixture(poly, density);
		body.setTransform(x, y, 0);
		poly.dispose();

		return body;
	}

	private Body createEdge(BodyDef.BodyType type, float x1, float y1, float x2, float y2, float density) {
		EdgeShape poly = new EdgeShape();
		poly.set(new Vector2(0, 0), new Vector2(x2 - x1, y2 - y1));

		BodyDef def = new BodyDef();
		def.type = type;
		Body body = world.createBody(def);
		body.createFixture(poly, density);
		body.setTransform(x1, y1, 0);
		poly.dispose();

		return body;
	}

	private Body createCircle(BodyDef.BodyType type, float x, float y, float radius, float density) {
		CircleShape poly = new CircleShape();
		poly.setRadius(radius);

		BodyDef def = new BodyDef();
		def.type = type;
		Body body = world.createBody(def);
		body.createFixture(poly, density);
		body.setTransform(x, y, 0);
		poly.dispose();

		return body;
	}
}
```

This "game" adds circles and boxes when you click or touch. The circles and boxes obey realistic physics, thanks to Box2D.