# Codia
[コミュニティ向け技術Q&Aサイト Codia](https://www.codia.site) 
※ 現在は、サイトの運用を停止しております。

## 概要

Codia は、「プログラミング学習をする初学者の質問することへのハードルを下げたい」、「過去に同様の質問された内容を見返せるようにしたい」という想いから作成された技術Q&Aサイトです。

定型文に沿って質問を作成することや過去に質問された内容を検索及び閲覧することができます。

## 使用技術
### フロントエンド
- React ^18
- Next.js 14.2.13

### バックエンド
- PHP ^8.3
- Laravel Framework 11.9

### ライブラリ

データフェッチ関連

- Tanstack Query ^5.59.9

UI 全般

- CSS Modules
- React-icons 5.3.0

フォーム関連

- Zod ^3.22.4

### データベース

- MySQL 8.4.2

### インフラ

Docker 27.3.1
docker-compose 2.29.7
Debian 12
Apache 2.4.57
Vercel (フロントエンド)
AWS (バックエンド)

#### AWS の利用サービス

- ECR
- ECS
- Route 53
- VPC
- RDS
- ACM

### バージョン管理

- Git/GitHub

### CI/CD

- Laravel Pint ^1.13
- ES Lint ^8
- Prettier 3.3.3
- GitHub Actions

## テーマ

[テーマはこちら](https://github.com/shtk0llq/codia/blob/main/documents/THEME.md)

## 要件定義

[要件定義はこちら](https://github.com/shtk0llq/codia/blob/main/documents/REQUIREMENT_DEFINITION.md)

## 業務フロー

[業務フローはこちら](https://www.figma.com/board/OvoZwQdtcAgcMd2Ytci5Vd/%E6%A5%AD%E5%8B%99%E3%83%95%E3%83%AD%E3%83%BC?node-id=0-1&node-type=canvas)

## API設計

[API設計はこちら](https://app.swaggerhub.com/apis/ShinagawaTakanori/codia/1.0.0)

## ER 図
![Codia](https://github.com/user-attachments/assets/30947eb1-c1e7-438f-9f8c-baed445b4a60)

## インフラ構成図
![Codia](https://github.com/user-attachments/assets/8f3cac54-b1ce-433e-90ca-9dce80722239)
