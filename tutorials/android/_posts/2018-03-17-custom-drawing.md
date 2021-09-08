---
layout: tutorial
title: Custom Drawing
thumbnail: /tutorials/android/images/custom-drawing-4.png
tagline: Create your own View.
sort-key: 600
meta-title: Custom Drawing in Android
meta-description: Create your own View.
meta-image: /tutorials/android/images/drawing-drawing-5.png
tags: [tutorial, android]
---

{% include toc.md %}

So far, we've built apps from Activities, using layouts that contain Views, which are individual components like buttons and labels. Android gives us a bunch of predefined Views, which we can use to build our apps.

But we can also create our own custom Views that can show custom drawings. This is especially useful for things like visualizations and games.

## Creating a View

To create our own view, we create a subclass of the `View` class. The basics look like this:

```java
package io.happycoding.helloworldapp;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;

public class CustomView extends View {
    public CustomView(Context context, AttributeSet attr) {
        super(context);
    }
}
```

Now that we have a subclass of `View`, we can use it just like any other `View`. For example we can use it in our layout XML file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical">
        <view
            class="io.happycoding.helloworldapp.CustomView"
            id="@+id/custom-view-id"
            android:layout_width="fill_parent"
            android:layout_height="fill_parent" />
</LinearLayout>
```

This layout fills the screen with our custom view. But since we haven't added any drawing code to our view, this just renders as completely blank.

## Custom Drawing

To draw something in our view, we need to override the `onDraw()` function, which is called when Android renders the view on screen. The `onDraw()` function takes a `Canvas` argument, which contains functions that allow us to draw stuff inside our view. Here's an example:

```java
package io.happycoding.helloworldapp;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.util.AttributeSet;
import android.view.View;

public class CustomView extends View {
    public CustomView(Context context, AttributeSet attr) {
        super(context);
    }
    
    @Override
    public void onDraw(Canvas canvas){

        canvas.drawColor(Color.rgb(32,32,32));

        Paint redPaint = new Paint();
        redPaint.setColor(Color.rgb(255, 0, 0));

        Paint greenPaint = new Paint();
        greenPaint.setColor(Color.rgb(0, 255, 0));

        Paint bluePaint = new Paint();
        bluePaint.setColor(Color.rgb(0, 0, 255));

        canvas.drawCircle(800, 500, 200, redPaint);
        canvas.drawCircle(325, 900, 300, greenPaint);
        canvas.drawCircle(900, 1600, 400, bluePaint);
    }
}
```

This example overrides the `onDraw()` function and uses the `canvas` argument to draw three circles on a gray background. Notice how Android uses the `Paint` class to specify properites like fill color.

Our app now looks like this:

<img src="/tutorials/android/images/custom-drawing-1.png" style="width: 500px;" />

### Width and Height

Instead of hard-coding the positions of our drawings, we could use the `getWidth()` and `getHeight()` functions to base the drawing off the size of the view.

```java
package io.happycoding.helloworldapp;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.util.AttributeSet;
import android.view.View;

public class CustomView extends View {
    public CustomView(Context context, AttributeSet attr) {
        super(context);
    }

    @Override
    public void onDraw(Canvas canvas){

        canvas.drawColor(Color.rgb(32,32,32));

        Paint redPaint = new Paint();
        redPaint.setColor(Color.rgb(255, 0, 0));

        Paint greenPaint = new Paint();
        greenPaint.setColor(Color.rgb(0, 255, 0));

        Paint bluePaint = new Paint();
        bluePaint.setColor(Color.rgb(0, 0, 255));

        canvas.drawCircle(getWidth()*.75f, getHeight()*.2f, 200, redPaint);
        canvas.drawCircle(getWidth()*.25f, getHeight()*.3f, 300, greenPaint);
        canvas.drawCircle(getWidth()*.5f, getHeight()*.75f, 400, bluePaint);
    }
}
```

This view draws three circles, and the position of the circles is based on the size of the view.

<img src="/tutorials/android/images/custom-drawing-2.png" style="width: 500px;" />

## Input Events

The `View` class also provides several event callback functions that you can override. Android automatically calls these functions when the user does stuff like touch the screen. This lets us take some action in response to user input.

For example, the `onTouchEvent()` function is called whenever the user touches the screen inside the view:

```java
    @Override
    public boolean onTouchEvent(MotionEvent event) {
        System.out.println("x: " + event.getX());
        System.out.println("y: " + event.getY());
        return true;
    }
```

We can use the `MotionEvent` argument to get information about the input, such as the position of the touch.

Here's an example that stores each touch position in a list, and then draws the points in the `onDraw()` function:

```java
package io.happycoding.helloworldapp;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Point;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;

import java.util.ArrayList;
import java.util.List;

public class CustomView extends View {

    private List<Point> points = new ArrayList<>();

    public CustomView(Context context, AttributeSet attr) {
        super(context);
    }

    @Override
    public void onDraw(Canvas canvas){

        canvas.drawColor(Color.rgb(32,32,32));

        for(Point p : points){
            Paint paint = new Paint();
            paint.setColor(Color.rgb((int)(Math.random()*256), (int)(Math.random()*256), (int)(Math.random()*256)));
            canvas.drawCircle(p.x, p.y, 50, paint);
        }
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        points.add(new Point((int)event.getX(), (int)event.getY()));
        invalidate();
        return true;
    }
}
```

Notice that the `onTouchEvent()` function calls the `invalidate()` function. This tells Android to redraw the view, which triggers the `onDraw()` function being called again.

The result is a simple drawing app that shows randomly colored circles wherever the user touches:

<img src="/tutorials/android/images/custom-drawing-3.png" style="width: 500px;" />

## More Info

- [View API](https://developer.android.com/reference/android/view/View.html)
- [Canvas API](https://developer.android.com/reference/android/graphics/Canvas.html)
- [Making the View Interactive](https://developer.android.com/training/custom-views/making-interactive.html)