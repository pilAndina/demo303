echo 'Borrar Apk'
rm -rf pilApp.apk
echo 'Generer resources'
ionic cordova resources
echo 'Generar Apk'
ionic cordova build android --prod --release
echo 'Firmar'
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk pilApp
echo 'Comprimir'
/Users/nicolas/Development/android-sdk/build-tools/26.0.0-rc1/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk pilApp.apk