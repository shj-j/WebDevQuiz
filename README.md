# Quiz需求
1. 商城页面展示商品列表
   - 进入商城页面，显示默认商品列表（需要自己完善商品信息）
   - 点击添加按钮，添加商品到订单列表。添加请求还未返回时，添加按钮不可点击，添加成功后，可继续添加商品
2. 订单页面显示商品订单列表
   - 进入订单页，显示订单列表（订单信息见mockup）
   - 无订单时，显示“暂无订单，返回商城页面继续购买”，点击“商城页面”返回到商城页
3. 订单页面删除订单信息
   - 进入订单页，点击删除按钮，删除订单。删除成功，订单页面删除订单记录。删除失败，弹框中提示“订单删除失败，请稍后再试”
4. 添加商品页可添加新的商品
   - 进入添加商品页，可输入商品名称、价格、商品单位以及商品图片链接，用于添加新的商品。点击“提交”按钮，创建商品。返回到商城页，可查看新创建的商品信息
   - 字段均不能为空，价格为数字。若不满足格式，“提交”按钮不可点击
   - 若商品名称已经存在，点击“提交”后，弹框中提示“商品名称已存在，请输入新的商品名称”

## Quiz要求
1. 自己创建前后端代码库，前端React，后端Spring Boot，后端代码需要书写测试
2. 默认商品列表需要从数据库读取
3.提交Tasking到代码库
4. 小步提交
5. 独立完成，按时提交，将代码库地址提交到classroom，并给自己讲师开放push代码的权限
6. 注意代码质量
7. 有任何需求问题，向讲师询问
8. 如果发现相似代码，会在培训EOT中体现，并告知U BP