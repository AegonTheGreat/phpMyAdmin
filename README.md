# How to use?
First:
`sudo apt-get install php-fpm php-mysql`
You should install nodejs, npm and dependencies:
```
npm install
```
Then you should edit your /etc/nginx/sites-available/default file and append this block of code:
```
location /phpmyadmin {
  proxy_pass http://localhost:8547;
              proxy_set_header Host $host;
              proxy_set_header X-Forwarded-For $remote_addr;
}

location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php7.0-fpm.sock;
}
```

After that:
```
sudo nginx -t
sudo systemctl restart nginx
```

And launch the program via pm2:
`pm2 start main.js`
