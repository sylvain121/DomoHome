install mysql server on docker

docker run --name gladys-mysql \
--restart=always \
-v /var/lib/mysql:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=mysecretpassword \
-e MYSQL_DATABASE=gladys \
-d mysql:latest


gladys init


docker run --name gladys-node-init \
-v /root/hooks:/src/api/hooks \
-e NODE_ENV=development \
-e MYSQL_HOST=mysql \
-e MYSQL_PASSWORD=mysecretpassword \
-e MYSQL_PORT=3306 \
--link gladys-mysql:mysql \
gladysproject/gladys \
node init.js



gladys start

docker run --name gladys-node \
--restart=always \
-p 80:8080 \
-v /root/hooks:/src/api/hooks \
-e NODE_ENV=production \
-e MYSQL_HOST=mysql \
-e MYSQL_PASSWORD=mysecretpassword \
-e MYSQL_PORT=3306 \
--link gladys-mysql:mysql \
-d gladysproject/gladys



