package com.yimiyisu.house;

import com.zen.ZenApp;

public class Application extends ZenApp {

    public static void main(String[] args) {
        int listenPort = 7036;
        String appName = "house";
        ZenApp app = new Application();
        app.multiTenant();
        app.start(args, appName, listenPort);
    }
}
