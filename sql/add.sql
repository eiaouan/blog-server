-- 给表添加约束

alter table sort modify sort_name char(64) unique key; -- 添加唯一约束

alter table atag modify atag_name char(64) unique key;

-- 添加视图
-- 文章详情
create view article_details as 
select article.aid,article.uid,article.sid, users.username,users.avatar,
article.title,article.create_time,article.article_summary,
article.cover,sort.sort_name
from users inner join article on users.uid=article.uid 
inner join sort on sort.sid = article.sid;

-- 评论详情

create view comment_details as 
select comment.comid,article.aid,users.uid, comment.comment_content,comment.publish_time,
users.username,users.avatar
from comment inner join users on comment.uid = users.uid
inner join article on comment.aid = article.aid;