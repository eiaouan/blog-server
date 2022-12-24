/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2022/12/23 22:08:50                          */
/*==============================================================*/


drop table if exists article;

drop table if exists article_atag;

drop table if exists collect_article;

drop table if exists collect;

drop table if exists comment;

drop table if exists atag;

drop table if exists sort;

drop table if exists users;

/*==============================================================*/
/* Table: article                                               */
/*==============================================================*/
create table article
(
   aid                  char(8) not null,
   uid                  char(8),
   sid                  char(8),
   title                text not null,
   content              text,
   create_time          datetime,
   update_time          datetime,
   cover                longblob,
   article_summary      text,
   publish_state        char(16),
   primary key (aid)
);

/*==============================================================*/
/* Table: article_atag                                         */
/*==============================================================*/
create table article_atag
(
   lid                  char(8) not null,
   aid                  char(8) not null,
   primary key (lid, aid)
);

/*==============================================================*/
/* Table: collect_article                                       */
/*==============================================================*/
create table collect_article
(
   aid                  char(8) not null,
   cid                  char(8) not null,
   primary key (aid, cid)
);

/*==============================================================*/
/* Table: collect                                            */
/*==============================================================*/
create table collect
(
   cid                  char(8) not null,
   uid                  char(8),
   collect_name         char(255) not null,
   primary key (cid)
);

/*==============================================================*/
/* Table: comment                                               */
/*==============================================================*/
create table comment
(
   comid                char(8) not null,
   aid                  char(8),
   uid                  char(8),
   comment_content      text not null,
   parent_comid         char(8),
   publish_time         date not null,
   primary key (comid)
);

/*==============================================================*/
/* Table: atag                                               */
/*==============================================================*/
create table atag
(
   lid                  char(8) not null,
   atag_name           char(64),
   atag_description    char(255),
   primary key (lid)
);

/*==============================================================*/
/* Table: sort                                                  */
/*==============================================================*/
create table sort
(
   sid                  char(8) not null,
   sort_name            char(64),
   aort_description     char(255),
   parent_sid           char(8),
   primary key (sid)
);

/*==============================================================*/
/* Table: users                                                 */
/*==============================================================*/
create table users
(
   uid                  char(8) not null,
   username             char(255) not null,
   password             char(12) not null,
   breif                char(255),
   sex                  char(4),
   level                numeric(8,0),
   regrist_time         date,
   avatar               char(255),
   primary key (uid)
);

alter table article add constraint FK_sort_article foreign key (sid)
      references sort (sid) on delete restrict on update restrict;

alter table article add constraint FK_write foreign key (uid)
      references users (uid) on delete restrict on update restrict;

alter table article_atag add constraint FK_article_atag foreign key (lid)
      references atag (lid) on delete restrict on update restrict;

alter table article_atag add constraint FK_article_atag2 foreign key (aid)
      references article (aid) on delete restrict on update restrict;

alter table collect_article add constraint FK_collect_article foreign key (aid)
      references article (aid) on delete restrict on update restrict;

alter table collect_article add constraint FK_collect_article2 foreign key (cid)
      references collect (cid) on delete restrict on update restrict;

alter table collect add constraint FK_user_collect foreign key (uid)
      references users (uid) on delete restrict on update restrict;

alter table comment add constraint FK_article_comments foreign key (aid)
      references article (aid) on delete restrict on update restrict;

alter table comment add constraint FK_parent_comment foreign key (parent_comid)
      references comment (comid) on delete restrict on update restrict;

alter table comment add constraint FK_publish foreign key (uid)
      references users (uid) on delete restrict on update restrict;

alter table sort add constraint FK_parent_sort foreign key (parent_sid)
      references sort (sid) on delete restrict on update restrict;

