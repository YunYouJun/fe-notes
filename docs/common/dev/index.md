# 开发实践

## Commit Message

代码提交 Commit Message 在开源社区项目中相比个人项目尤为重要，我们需要一个规范的格式来区分每次提交的功能，这也使得 CHANGELOG 赏心悦目。
同时也有一些 Release 机器人通过 Commit Message 来自动生成发版日志。

我自身过去经常使用 [gitmoji](https://gitmoji.dev/) 这一规范，即使用 emoji 作为每次 commit message 的开头，作为示意。
它很可爱，对于个人项目来说也无伤大雅而反而显得更为别致，但是对于与他人合作的大型项目来说，这可能就不大合适了。

因此，工作中其实更为推荐广为流行的 Angular Commit Message 规范，这也是众多开源项目使用的标准格式。

更多内容可参见下文给出的链接，不再赘述。

### Angular

- [Commit Message Format | angular | GitHub](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format)
- [AngularJS Git Commit Message Conventions | Google Docs](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit?usp=sharing)
- [Angular 提交信息规范](https://zj-git-guide.readthedocs.io/zh_CN/latest/message/Angular%E6%8F%90%E4%BA%A4%E4%BF%A1%E6%81%AF%E8%A7%84%E8%8C%83/): 大致是上文的翻译

#### 相关工具

- [commitlint | GitHub](https://github.com/conventional-changelog/commitlint): 对提交的 commit 信息进行检查
- [conventional-github-releaser | GitHub](https://github.com/conventional-changelog/releaser-tools/tree/master/packages/conventional-github-releaser): 根据 Git 信息在 GitHub 上 Release，一个示例 [.github/workflows/release.yml | antfu/ni](https://github.com/antfu/ni/blob/main/.github/workflows/release.yml)
- [cz-cli](https://github.com/commitizen/cz-cli): 使用 cli 交互命令提交符合规范的 commit message

### Gitmoji

- [gitmoji](https://gitmoji.dev/): An emoji guide for your commit messages
- [gitmoji | GitHub](https://github.com/carloscuesta/gitmoji)
- [gitmoji-cli | GitHub](https://github.com/carloscuesta/gitmoji-cli): 通过 cli 来生成规范的 gitmoji message
