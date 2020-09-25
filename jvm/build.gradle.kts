plugins {
    kotlin("jvm")
    application
    id("com.github.johnrengelman.shadow") version "6.0.0"
}

application {
    mainClassName = "com.yt8492.speedtest.jvm.MainKt"
}

group = "com.yt8492"
version = "1.0.0"

repositories {
    mavenCentral()
}

dependencies {
    implementation(project(":common"))
    implementation(kotlin("stdlib-jdk8"))
}
