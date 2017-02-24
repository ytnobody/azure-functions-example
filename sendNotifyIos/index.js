//== Azure Event Hubs及びAzure Notification Hubsと連携したモバイルプッシュのコード例
module.exports = function (context, inputEvent) {
    // Notification Hubs統合へapnsメッセージを出力
    context.bindings.notification = {
        "aps": {
            "alert": "hello! " + inputEvent.name
        }
    };
    // 関数の終了を宣言
    context.done();
};
