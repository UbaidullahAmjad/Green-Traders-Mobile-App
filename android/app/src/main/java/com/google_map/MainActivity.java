package com.green_traders;

import android.os.Bundle; // here 
import org.devio.rn.splashscreen.SplashScreen; // here 

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "green_traders";
    // return "green_traders";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      // setStatusBar(this);
      SplashScreen.show(this);  // here 
      super.onCreate(savedInstanceState);
  }

  // @TargetApi(Build.VERSION_CODES.LOLLIPOP)
  //   public static void setStatusBar(Activity activity) {
  //       if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
  //           Window window = activity.getWindow();
  //           window.setNavigationBarColor(activity.getResources().getColor(R.color.background2));
  //           window.setStatusBarColor(activity.getResources().getColor(R.color.background2));
  //       }
  //   }
}
