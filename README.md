# wxSignAPP

#### 介绍
项目名称：SieSignApp

#### 使用说明

1.  该项目有两个分支，master和develop，master是主分支，不应该直接在这上面修改，正常开发使用develop分支来开发，最后由管理员来合并
2.  初始化项目： Git init 
3.  每个人创建一个属于自己的分支，如:rgBranch,当然也可以不参加直接使用develop分支进行开发
    + 创建方法：git checkout -b develop 创建develop分支并切换到develop
    + 查看当前分支： git branch //由于没有如何内容，显示为空
4.  将本地的develop与origin develop建立连接（
    命令： git remote add origin https://gitee.com/iot_17/wxSignApp.git
5.  从develop分支拉取代码
    + 命令： git pull origin develop
    + 命令： git branch -u origin/develop develop //用来将本地分支，推送到线上

6.  正常开发
7.  开发完成
    + 步骤1： 拉取develop分支
        + 命令:  git pull origin develop 这时候可能会遇到冲突，原则是谁冲突谁解决
    + 步骤2： 将代码推送到master分支
        + 命令：git add .
        + 命令: git commit "描述格式  时间+姓名+描述"
        + 命令：git push origin develop //注意这一步
           + 如果创建了自己的分支,或者说你当前所在分支不与需要提交的分支同名就需要使用这种方式推送
           + 使用：git push origin HEAD:develop


