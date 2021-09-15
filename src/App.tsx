import React from "react";
import ConfigProvider from "antd/lib/config-provider";
import "antd/dist/antd.less";
// import style from "./App.module.less";
import RouterPage from "./router";
// import { getLocale, localeInfo, LocaleProvider } from "./components/locales";

/**
 * 入口
 * @constructor
 */
function App() {
  return (
    <div>
      <header>
        <ConfigProvider>
          <RouterPage />
        </ConfigProvider>
      </header>
    </div>
  );
}

export default App;
