if [ ! -d "htdocs/wp-admin" ]; then
	echo 'Installing WordPress (release version) in sushkelly/htdocs...'
	if [ ! -d "./htdocs" ]; then
		mkdir ./htdocs
	fi
	cd ./htdocs
	wp core download --locale=en_US --allow-root 
	wp core config --dbname="sushkelly" --dbuser=wp --dbpass=wp --dbhost="localhost" --dbprefix=wp_ --locale=en_US --allow-root --extra-php <<PHP
if ( isset( \$_SERVER['HTTP_HOST'] ) && preg_match('/^(sushkelly.)\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(.xip.io)\z/', \$_SERVER['HTTP_HOST'] ) ) {
define( 'WP_HOME', 'http://' . \$_SERVER['HTTP_HOST'] );
define( 'WP_SITEURL', 'http://' . \$_SERVER['HTTP_HOST'] );
}
PHP
	wp core install --url=sushkelly.dev --title="sushkelly" --admin_user=admin --admin_password=password --admin_email=admin@localhost.dev --allow-root
  wp theme delete twentythirteen --allow-root; wp theme delete twentyfourteen --allow-root; wp theme delete twentyfifteen --allow-root; wp theme delete twentysixteen --allow-root; wp plugin delete hello --allow-root; wp plugin delete akismet --allow-root; git checkout HEAD .
	cd -
fi
