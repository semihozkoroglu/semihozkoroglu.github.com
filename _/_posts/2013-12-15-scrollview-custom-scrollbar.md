---
layout: post
title: Scrollview Custom Scrollbar
tag: scrollview
---

if the theme you want to use the scrollbar entire application. We need to write custom theme. that ;

	<application
		.
		.
        android:theme="@style/AppTheme"
        .
        . >

and let's add scrollbar properties to sytles.xml

	<resources xmlns:android="http://schemas.android.com/apk/res/android">
	    <style name="AppTheme" parent="Theme.Sherlock.Light.NoActionBar">
	    	.
	    	.
	        <item name="android:scrollbarThumbVertical">@drawable/shape_scrollbar_style</item>
	        <item name="android:scrollbarSize">5dp</item>
	        .
	        .
	    </style>
 	</resources>


and now you can add what you want visuality to `drawable/shape_scrollbar_style.xml`

	<?xml version="1.0" encoding="utf-8"?>
	<shape xmlns:android="http://schemas.android.com/apk/res/android" >

	    <gradient
	        android:angle="45"
	        android:endColor="#103249"
	        android:startColor="#FF33B5E5" />

	    <corners android:radius="1dp" />

	    <stroke android:width="2dp"/>
	</shape>