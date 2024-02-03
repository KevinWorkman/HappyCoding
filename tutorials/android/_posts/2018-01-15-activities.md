---
layout: post
title: Activities
thumbnail: /tutorials/android/images/activities-1.png
tagline: Explore the Android lifecycle.
sort-key: 400
meta-title: Android Activities
meta-description: Explore the Android lifecycle.
meta-image: /tutorials/android/images/layouts-5.png
tags: [tutorial, android]
---

{% include toc.md %}

So far, we've talked about putting a layout together, and we've talked about creating a simple `Activity` class that runs when your app is opened. This tutorial talks about the more advanced features of Android activities.

## Lifecycle

Android activities have what's called a **lifecycle**, which means that different events happen to them. To understand them, let's think about how an Android app is typically used:

- First, the user opens the app.
- The app opens, and the user starts interacting with it.
- Now the user receives a text message, and switches away from the app to reply.
- The user then goes back to the app, and it continues where it left off.
- After they're done using the app, the user goes back to their home screen or starts using another app.
- If enough time goes by, or if Android needs to reclaim some resources used by the app, or if the user clears the app from their recent apps list, then Android will shut down the app and exit it completely.
- If the user opens the app again, it starts over at its beginning state.

You've probably seen this yourself: you're playing a game, switch to something else for a minute, come back to the game a couple minutes later, and see that the game is continuing where you left off. If you leave the game for too long, or if you clear it from your recent apps list, then the game will start over at its title screen.

This is called the activity lifecycle. As a programmer, you can tie into these lifecycle events by overriding the corresponding lifecycle function. We've already seen the `onCreate()` function, which runs when the app is first created. There are several other lifecycle functions we can override:

- `onCreate()` is called when the activity is first opened.
- `onStart()` is called after `onCreate()` when the activity becomes visible, and whenever the user returns to the app after exiting it.
- `onResume` is called after `onStart()` when the app becomes interactive.
- `onPause` is called whenever the user navigates to another activity.
- `onStop()` is called when the activity is no longer visible.
- `onDestroy()` is called when the activity is completely exited.

By default, rotating the screen will also cause an activity to be destroyed and recreated. You can check whether the event is being caused by a rotation by calling the `isChangingConfigurations()` function.

The best way to understand when these events happen is to put together an example activity that logs messages for each lifecycle event:

```java
package io.happycoding.helloworldapp;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Log.i("debug", "onCreate() was called. Changing config :" + isChangingConfigurations());
    }

    @Override
    protected void onStart(){
        super.onStart();
        Log.i("debug", "onStart() was called. Changing config :" + isChangingConfigurations());
    }

    @Override
    protected void onResume(){
        super.onResume();
        Log.i("debug", "onResume() was called. Changing config :" + isChangingConfigurations());
    }

    @Override
    protected void onPause(){
        super.onPause();
        Log.i("debug", "onPause() was called. Changing config :" + isChangingConfigurations());
    }

    @Override
    protected void onStop(){
        super.onStop();
        Log.i("debug", "onStop() was called. Changing config :" + isChangingConfigurations());
    }

    @Override
    protected void onDestroy(){
        super.onDestroy();
        Log.i("debug", "onDestroy() was called. Changing config :" + isChangingConfigurations());
    }
}
```

Run this activity and look at the `Logcat` tab in Android Studio to see when the various events happen. Here's an example log:

```
(opened app)
onCreate() was called. Changing config :false
onStart() was called. Changing config :false
onResume() was called. Changing config :false
(app is now open)
(rotated phone)
onPause() was called. Changing config :true
onStop() was called. Changing config :true
onDestroy() was called. Changing config :true
onCreate() was called. Changing config :false
onStart() was called. Changing config :false
onResume() was called. Changing config :false
(app is now rotated)
(exited app)
onPause() was called. Changing config :false
onStop() was called. Changing config :false
(reopened app)
onStart() was called. Changing config :false
onResume() was called. Changing config :false
(app is now open)
(exited app)
onPause() was called. Changing config :false
onStop() was called. Changing config :false
(removed app from recent apps list)
onDestroy() was called. Changing config :false
```

There are actually even more lifecycle events, and you can check them out [Life Cycle docs](https://developer.android.com/guide/components/activities/activity-lifecycle.html). You can read more about `Activity` class functions on the [Activity docs](https://developer.android.com/reference/android/app/Activity.html). But if all of this sounds complicated, don't worry: most activities will only have to override a couple of these functions.

For example, a simple activity might just override the `onCreate()` function and none of the others. This is how the example apps we've already seen work. A more advanced activity might override the `onPause()` function to save some state and the `onResume()` function to load it. But for now, just know that you only have to override the `onCreate()` function and can figure out the rest as you need them.

## Multiple Activities

So far, all of our example apps have used just one activity. But most apps in the real world will actually contain multiple activities. You can think of an activity as one screen in your app. Whenever you want to transition to a new screen, you probably want to create a new activity.

To use multiple activities, first create a new activity class and corresponding layout XML file, just like we've already seen. Then to switch from one activity to another, create an `Intent` instance and call the `startActivty()` function. Here's a `MainActivity` class that switches to a `ClickedScreenActivity` activity class when the user clicks a button:

```java
package io.happycoding.helloworldapp;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final Button button = findViewById(R.id.button_id);
        button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, ClickedScreenActivity.class);
                startActivity(intent);
            }
        });
    }
}
```

This class relies on a `activity_main.xml` layout file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical">
        <Button
            android:id="@+id/button_id"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Click me."
            android:textSize="24sp" />
</LinearLayout>
```

The `ClickedScreenActivity` activity class simply loads its own layout:

```java
package io.happycoding.helloworldapp;

import android.app.Activity;
import android.os.Bundle;

public class ClickedScreenActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_clicked_screen);
    }
}
```

This requires the `activity_clicked_screen.xml` layout file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical">
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="You clicked the button."
        android:textSize="24sp" />
</LinearLayout>
```

The last thing we need to do is to declare the `ClickedScreenActivity` in the `AndroidManifest.xml` file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="io.happycoding.helloworldapp">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <activity android:name=".ClickedScreenActivity" />
    </application>
</manifest>
```

Notice the `<activity android:name=".ClickedScreenActivity" />` line. This line tells our Android app about the new activity class, which lets us use it in the code above. Also note that we could have set additional properties on this tag, but for simplicity we're just using a self-closing tag without any properties.

When you run this app, the main activity shows a button. When the user clicks the button, the app switches to another activity that shows a "You clicked the button" message. The user can go back to the main activity by pressing the back button.

## External Activities

It's also possible to launch external activities, such as a browser or the camera app. To launch an activity, we have to create an `Intent` instance. How you do that depends on which external activity you want to launch, and you can find more information in [Intent documentation](https://developer.android.com/reference/android/content/Intent.html) for the `Intent` class.

Here's an example that would launch a browser to everybody's favorite website:

```java
Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://happycoding.io"));
startActivity(browserIntent);
```

There are a bunch of different ways to launch external activities. The best thing you can do is read through the documentation:

- [Intent API](https://developer.android.com/reference/android/content/Intent.html)
- [Intents and Filters](https://developer.android.com/guide/components/intents-filters.html)
- [Interacting with Other Apps](https://developer.android.com/training/basics/intents/index.html)
