# 个人编译的部分Dash的Docsets

1. Cassandra

    网页地址：http://docs.datastax.com/en/cassandra/3.0/

    生成脚本：
    ```
    wget wget http://docs.datastax.com/en/cassandra/3.0/zip/cassandra30.zip
    unzip cassandra30.zip -d cassandra
    ./html2dash.py --name Cassandra --key cassandra cassandra
    tar --exclude='.DS_Store' -cvzf Cassandra.tgz Cassandra.docset
    ```
    
1. CQL for Cassandra

    网页地址：http://docs.datastax.com/en/cql/3.3/

    生成脚本：
    ```
    wget http://docs.datastax.com/en/cql/3.3/zip/cql33.zip
    unzip cql33.zip -d cql
    ./html2dash.py --name CQL --key cql cql
    tar --exclude='.DS_Store' -cvzf CQL.tgz CQL.docset
    ```
 
