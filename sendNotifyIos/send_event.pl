use strict;
use warnings;

### Event Hubsにイベントを送信するため、クライアントライブラリを使う
use Net::Azure::EventHubs;

### "Endpoint=sb://..." で始まるEvent Hubs接続文字列を設定する
my $connection_string = '...';

### Net::Azure::EventHubsのオブジェクトを作る
my $hub = Net::Azure::EventHubs->new(
    connection_string => $connection_string,
);

### 送信するイベントのデータをハッシュリファレンスとして定義する
my $payload = {
    name      => 'ytnobody',
    favorites => ['Azure', 'Perl'],
};

### イベントを送信する
$hub->message($payload)->do;
