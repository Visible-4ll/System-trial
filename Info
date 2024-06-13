/project_name/$project_name/" docker-compose.yml
/projectname/$project_name/" docker-compose.yml
/laravel_app/$project_name/" docker-compose.yml
/test_name_db/test_$project_name/" sql_scripts/create_test_db.sql

# Nginx port
/80:80/$nginx_port:80/" docker-compose.yml
/port: 80/port: $nginx_port/" vite.config.js

# PHP port
/9000:9000/$php_port:9000/" docker-compose.yml
fi

# Mysql port
/3306:3306/$mysql_port:3306/" docker-compose.yml

# Redis port
/6379:6379/$redis_port:6379/" docker-compose.yml

# Vite port
/port: 5173/port: $vite_port/" vite.config.js
/port: 5173/port: $vite_port/" vite_vue.config.js


# INSTALL LARAVEL ######################################################################################################
  
  docker-compose run composer create-project --prefer-dist laravel/laravel .
  docker-compose run composer composer require predis/predis

  # Update the .env file
  localhost/localhost:$nginx_port/" .env
  DB_DATABASE=laravel/DB_DATABASE=$project_name/" .env
  DB_HOST=127.0.0.1/DB_HOST=mysql/" .env
  DB_PASSWORD=/DB_PASSWORD=secret456/" .env
  REDIS_HOST=127.0.0.1/d" .env
  REDIS_PASSWORD=null/d" .env
  REDIS_PORT=6379/d" .env

  # Copy the changed config .
  stubs/config/database.php config/database.php

  # Install some assets
          Vue
              docker-compose run npm i @vitejs/plugin-vue
              #Transfer files
              stubs/vite_vue.config.js vite.config.js
              stubs/app_vue.js resources/js/app.js
              stubs/App.vue resources/js/App.vue
              stubs/vite.blade.php resources/views/vite.blade.php
              break
              ;;
         Tailwind
              docker-compose run npm install -D tailwindcss postcss autoprefixer
              #Transfer files
              stubs/vite_vue.config.js vite.config.js
              stubs/app_vue.js resources/js/app.js
              stubs/tailwind.css resources/css/app.css
              stubs/tailwind.config.js tailwind.config.js
              stubs/postcss.config.js postcss.config.js
              stubs/App.vue resources/js/App.vue

              # Copy example over welcome.blade.php
              cp resources/views/welcome.blade.php resources/views/welcome.blade.php.bak
              stubs/vite_tailwind.blade.php resources/views/welcome.blade.php

              # Compile assets
              docker-compose -f ../docker-compose.yml run --publish $vite_port:$vite_port npm run build

