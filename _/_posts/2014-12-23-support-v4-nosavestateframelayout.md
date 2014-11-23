---
layout: post
title: Android support v4 NoSaveStateFrameLayout layout optimization
tag: [support-v4, android, optimization, stackoverflow]
---

We know fragment coming from with HONEYCOMB. If we think to support the old version of this. we need to use the library from fragment support-v4.

But support fragment in order to support the previous version HONEYCOMB, Is placed between the parent view and the fragment view nosavestatelayout

![infrastructure](https://raw.githubusercontent.com/semihozkoroglu/File/master/Blog/nosavestate.jpg)

	/**
	 * Pre-Honeycomb versions of the platform don't have {@link View#setSaveFromParentEnabled(boolean)},
	 * so instead we insert this between the view and its parent.
	 */

@see [NoSaveStateFrameLayout.java](https://github.com/android/platform_frameworks_support/blob/master/v4/java/android/support/v4/app/NoSaveStateFrameLayout.java)



Especially if you are experiencing with StackOverflow error in 4.0.3 and 4.0.4 versions. This framelayout coming from library may cause that crash.

We need to know the situation. This crash occurs because of the layout is coming very depth.