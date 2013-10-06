---
layout: post
title: How to install Jira on Linux Amazon EC2 server
tag: jira
---

Firstly we must pull linux installer of jira

`wget https://www.atlassian.com/software/jira/download`

Change permission of file for execute

`chmod a+x atlassian-jira-6.1-x64.bin`

And execute

`./atlassian-jira-6.1-x64.bin`

Now we will install apache for listen 80 port, because linux installer will create jira user and this user cannot access 80 port. But tomcat listening 8080 port and we must forward request to 8080 from 80. So we will install apache for open 80 port.

`sudo apt-get install apache2`

`sudo a2enmod proxy_http`

`sudo service apache2 start` // New configuration

Lets see opened port.

`netstat -ln`

And you can create virtual host on apache for forward but i want to select that use with iptables

`iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to 8080`

For remove this rules

`iptables -t nat -D PREROUTING -p tcp --dport 80 -j REDIRECT --to 8080`

Lets see iptavbles rules

iptables -L