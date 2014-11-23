---
layout: post
title: Android support v4 NoSaveStateFrameLayout layout optimization
tag: [support-v4, android, optimization, stackoverflow]
---

Bildiğimiz gibi fragmentler HONEYCOMB ile geldi. Eğer uygulamamız içinde HONEYCOMB 'dan önceki sürümler için destek vermeyi düşünüyorsak. support-v4 kütüphanesi ile gelen fragment'i kullanmamız gerekmektedir. Ancak support kütüphanesinin fragment'i HONEYCOMB önceki sürümlere destek verebilmek için, araya NoSaveStateFrameLayout yerleştirmektedir.

[infrastructure](https://raw.githubusercontent.com/semihozkoroglu/File/master/Blog/nosavestate.jpg)

/**
 * Pre-Honeycomb versions of the platform don't have {@link View#setSaveFromParentEnabled(boolean)},
 * so instead we insert this between the view and its parent.
 */

[NoSaveStateFrameLayout.java](https://github.com/android/platform_frameworks_support/blob/master/v4/java/android/support/v4/app/NoSaveStateFrameLayout.java)

Özellikle 4.0.3 ve 4.0.4 sürümlerinde stackoverflow hatası ile karşılaşıyorsanız. Support library 'den gelen bu framelayout sebebi ile oluşabilir. Bu hatayı düzeltmek için iki çözüm mevcut. Ya support kullanmayıp sürümü 3.0 'a yükseltmeniz. Veya kullandığınız layoutların derinliğini azaltmanızdır.