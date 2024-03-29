# Mandala
## 概要
マンダラチャートと呼ばれる9✖️9マスの目標達成シートを管理するアプリケーション

[ポートフォリオはこちらから](https://www.portfolio-maruken9.com/landing)

<sm>マンダラチャートのイメージ</sm>
<br>
<img width="400" alt="マンダラチャートのイメージ" title="キャプションテキスト" src="https://user-images.githubusercontent.com/97023705/227471436-490e4543-b952-41df-bad3-d29472298217.png" >





## 設計

### 作りたいもの
目標達成シート(マンダラチャート)をwebアプリケーション内で管理し、同じような目標をもつ他のユーザーと目標を達成するためにお互いを刺激しあい、成長できるようなプラットフォーム。

### 動機
- スポーツ選手の目標達成シートを見て、やることや意識することを自分で考え明確化し、さらに視覚的に捉えることで考えて物事に取り組めると思い、誰でも使えるアプリケーションとして実現したい
- 同じような目標を持つユーザーと交流でき、モチベーションを高めるようなアプリが欲しい

### ターゲット(想定利用者)
- 目標を叶えたい人
- モチベーションを保ち続けたい人


### 他のアプリとの違い
目標達成シートを作成するだけのアプリはあるが、他のユーザーとの交流ができるアプリはない(現在実装中)

### できること
- 簡単に目標達成シートを作成し、更新できる
- 作成した目標達成シートに関するTodoを作成し、管理できる
- 他のユーザーと交流できる(現在開発中)

### 本ポートフォリオ独自の言葉の定義
- ゴール: マンダラチャートの中心の目標のこと
- ミッション: ゴールの周りの8つのセル
- サブミッション: ミッションの周りの8つのセル
<br>
<img width="500" alt="スクリーンショット 2023-03-24 18 11 16" src="https://user-images.githubusercontent.com/97023705/227475791-7bccd7ff-ce7c-421f-8104-2aec49cdd5f2.png">




### 必要な機能


- ユーザー登録
- ユーザー編集
- ユーザー認証
- デモユーザー用のログイン
- ゴール作成、更新
- ミッション作成、更新
- サブミッション作成、更新
- Todo作成、更新、削除
- Todoの表示

ポートフォリオが完成した後に実装する機能
- フレンドにメッセージを送れる
- フレンドリクエストの送信
- フレンドリクエストの可否
- フレンドの表示
- すべてのユーザーを表示


### ER図
<img width="600" alt="ER図" src="https://user-images.githubusercontent.com/97023705/227550720-5afa7d69-e372-43cd-bcae-1e26e821090f.png">


### テーブル設計
<img width="900" src="https://user-images.githubusercontent.com/97023705/227585993-3f64f0f4-63ea-40e0-8b53-d0b484aa7ee6.png" >



### 画面設計
[Figmaから](https://www.figma.com/file/0AwVZ5iiwdJfh8srhcN6qz/Mandala-app?node-id=0%3A1&t=YGPCdC2IGBWx4Nsa-1)

### インフラ図
<img width="700" alt="インフラ図" src="https://user-images.githubusercontent.com/97023705/227583757-077970ff-b445-4162-9248-742d55e8d32f.png">

## 使用技術

<details><summary>フロントエンド</summary>

 - 言語
   - JavaScript
 - 主要なライブラリ
   - React
   - react-router-dom
   - styled-component
   - axios
   - fullcalendar
   - rc-pagination
   - etc ...

</details>

<details><summary>バックエンド</summary>

 - 言語
   - JavaScript
 - 主要なライブラリ
   - Express
   - bcrypt
   - jsonwebtoken
   - sequelize
   - helmet
   - etc ...

</details>

<details><summary>インフラ</summary>

 - AWS
   - EC2
   - RDS
   - Route 53
   - VPC
 - Let's Encrypt

</details>

## 使い方

1. [アプリにアクセス](https://www.portfolio-maruken9.com)
2. デモユーザーでログイン
3. 好きなようにいじってみる

## 実際の画面
1\. ランディングページ
<br>
 - ランディングページはよくあるデザインで作成しました
<br>
<img width="800" alt="スクリーンショット 2023-03-24 18 15 48" src="https://user-images.githubusercontent.com/97023705/227476691-6099e4b7-f8ee-4365-b879-25b5a4df9ae3.png">


2\. 404ページ
<br>
 - 存在しないURLにアクセスが来た際の404ページを作成しました。404ページにはbackというホーム(/)に遷移するリンクがあります。
<br>
<img width="800" alt="スクリーンショット 2023-03-24 18 17 17" src="https://user-images.githubusercontent.com/97023705/227476985-e60afe81-741a-437a-9eb2-c3b425f42c64.png">

3\. ログインページ、ユーザー登録ページ
<br>
- ログインにはメールアドレスとパスワードを利用します
- ユーザー登録はユーザーネーム、メールアドレス、パスワードを利用します。
- ユーザー登録では登録後に有効化のメールを本ポートフォリオでは送らないため、メールアドレスのフォーマットにしたがたった、一意な文字列なら使用できるようになっています。
<br>
<p>
<img width="400" alt="スクリーンショット 2023-03-24 18 20 00" src="https://user-images.githubusercontent.com/97023705/227477639-3ca7e380-77c5-4777-8d7e-83a910bf452b.png">
<img width="390" alt="スクリーンショット 2023-03-24 18 21 29" src="https://user-images.githubusercontent.com/97023705/227478009-f5d63548-c691-462c-ae4d-45530eaf0f5a.png">
</p>

4\. ゴール作成ページ
<br>
 - ゴールを作成するページ。ゴールとそのゴールのタイプを入力する必要があります
<br>
<img width="800" alt="スクリーンショット 2023-03-24 18 42 04" src="https://user-images.githubusercontent.com/97023705/227484042-7a12f188-1416-48fa-9167-63835844605e.png">

5\. マンダラチャートページ
<br>
 - マンダラチャートの表示と更新を行えるページです
 - ゴールが作成されていない状態では表示されないようになっており、先ほどのゴール作成ページでゴールを作成すると、マンダラチャートページに移動できるようになります。
<br>
<img width="800" alt="スクリーンショット 2023-03-24 18 44 02" src="https://user-images.githubusercontent.com/97023705/227484445-42036ad6-d3c4-4bc9-89a5-eccbfbfda9e7.png">

6\. Todoリストページ
<br>
 - ユーザー自身が作成したtodoを表示します
 - todoはページネーションで表示され、一度で最大12個のtodoが表示されます
 - それぞれのTodoには、編集ボタンや削除ボタンがあります
<br>
<img width="800" alt="スクリーンショット 2023-03-24 18 47 37" src="https://user-images.githubusercontent.com/97023705/227485932-2a6febee-20eb-4abd-a051-74d46e9d8c3e.png">

7\. Todo作成ページ
<br>
 - Todoを作成できるページです
 - Todoにはコンテントや期日、関連するミッションやメモを入力できます
<br>
<img width="800" alt="スクリーンショット 2023-03-24 19 27 42" src="https://user-images.githubusercontent.com/97023705/227496983-1c44510e-a468-4637-ac3d-e0099ce449ae.png">


8\. Todo編集ページ
<br>
 - Todoを編集するページです
<br>
<img width="800" alt="スクリーンショット 2023-03-24 20 30 33" src="https://user-images.githubusercontent.com/97023705/227510121-f09bf830-2c95-4a9a-ab0f-477e47fae956.png">


9\. ヒストリーページ
<br>
 - Todoの履歴をカレンダーで見ることができます
 - カレンダーにはまだ取り組んでいないTodo(not started)と取り組み終わったTodo(done)を表示できます
 - 上部のボタンを押すことで、まだ取り組んでいないTodoと取り組み終わったTodoをフィルタリングできます
<br>
<img width="800" alt="スクリーンショット 2023-03-24 20 32 08" src="https://user-images.githubusercontent.com/97023705/227510461-6ab41d65-4855-48ff-bf6c-e601d91da598.png">

10\. プロフィールページ
<br>
- ユーザーのプロフィールを確認できます。
- Editボタンを押すことで、ユーザー 編集用のコンポーネントが表示されるようになっています。
<br>
<img width="800" alt="スクリーンショット 2023-03-24 20 32 40" src="https://user-images.githubusercontent.com/97023705/227510511-212769c4-6f52-4e0c-b521-1193ce1795d6.png">
<img width="800" alt="スクリーンショット 2023-03-24 20 33 45" src="https://user-images.githubusercontent.com/97023705/227510713-dad6e97a-cb00-4363-958d-2f5ef1f43114.png">


## 開発の際に苦労した点

### マンダラチャートの表示
9✖️9マスの表に正しくデータを正しい位置に、データを配置する点に悩みました

#### 解決策
ユーザーが作成したミッション、サブミッションをそれぞれ正しい配置するために、ミッションとサブミッションにはpostionというメタデータを付与し、9✖️9マスのそれぞれに対応した位置に配置するようにして解決しました。

### カレンダーの表示
初めてカレンダーの機能を実装するにあたって、自分がイメージしたカレンダーを実装するためにullcalendarというライブラリを使用しました。しかし、初めて使うライブラリかつ、少々個人的にドキュメントがわかりづらかったため実装には苦労しました。特にイメージするカレンダーに近づけるために必要なprops等が不明でした。

#### 解決策
fullcalendarの先駆者の方々が書いてくださった記事を参考に試行錯誤をしてなんとかイメージしたカレンダーを実装することができました。

### デプロイ
AWSを使って実際にアプリをデプロイをしてみようとした際に、AWSを使って何をすればデプロイできるか分からなかったため苦労しました。

#### 解決策
私はUdemyのAWSを用いたハンズオンでサーバーを構築する講座を購入してAWSについて基礎を学習しました。そのおかげで、どのサービスを使用すればサーバーを構築できるかが分かり、実際に作成したアプリをインターネットにデプロイできました。
