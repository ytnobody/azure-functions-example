//== 統合機能を使ったFunctionsからDocumentDBへのデータ登録例 ==

module.exports = function (context, req) {

    // パラメータにnameとmemberidがある場合に限りDocumentDBにデータを登録する。
    if (req.query.name && req.query.memberid) {

        // function.jsonの指定により、context.bindingsの中に
        // DocumentDBへの書き込み用の名前空間「outputDocument」が生える。
        context.bindings.outputDocument = {
            id:   req.query.memberid, // memberidの値をドキュメントのidとする
            name: req.query.name,
        };

        // context.res.bodyにJSONレスポンスの内容を入れるだけでJSONを返すAPIができる
        context.res.body = {message: "Success"};

    }
    // パラメータが不足している場合はエラーとする
    else {
        context.res.status = 400; // HTTPレスポンスコードを指定することもできる（デフォルトは200）
        context.res.body   = {message: "Bad request"};
    }

    // 関数の終了を宣言
    context.done(null, context.res);
};