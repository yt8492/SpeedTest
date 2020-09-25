#!/usr/bin/env zsh
echo 'java -jar'
for i in {1..10} ; do
  time java -jar executable/jvm-1.0.0-all.jar > /dev/null 2>&1
done

echo 'graalvm native-image'
for i in {1..10} ; do
    time ./executable/jvm-1.0.0-all > /dev/null 2>&1
done

echo 'node'
for i in {1..10} ; do
    time node executable/main.js > /dev/null 2>&1
done

echo 'native'
for i in {1..10} ; do
    time executable/native.kexe > /dev/null 2>&1
done
