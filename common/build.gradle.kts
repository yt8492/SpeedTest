plugins {
    kotlin("multiplatform")
}

group = "com.yt8492"
version = "1.0.0"

repositories {
    mavenCentral()
}

kotlin {
    jvm()
    js(IR) {
        nodejs()
    }
    macosX64()

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(kotlin("stdlib-common"))
            }
        }
    }
}
