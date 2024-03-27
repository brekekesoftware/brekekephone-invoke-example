andr:
	export V=$$(jq -r ".version" package.json) && \
	cd android && ./gradlew clean && ./gradlew assembleRelease && \
	scp app/build/outputs/apk/release/app-release.apk bre:/var/www/upload/invoke/brekeke_phonedev$$V.apk;
