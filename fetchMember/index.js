//== 統合機能を使ったDocumentDBからのデータ取得例
module.exports = function (context, req) {

    // DocumentDBからデータを取得する
    var member = context.bindings.inputDocument;

    // データが存在する場合
    if (member) {
        // JSONレスポンスにmemberを含める
        context.res.body = {
            message: "Found",
            member:  member
        };
    }

    // データが存在しない場合
    else {
        context.res.status = 404;
        context.res.body   = {message: "Not Found"};
    }

    // 関数の終了を宣言
    context.done(null, context.res);
};
