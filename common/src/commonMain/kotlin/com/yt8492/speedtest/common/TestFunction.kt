package com.yt8492.speedtest.common

import kotlin.random.Random

fun testFunction() {
    val randomArray = IntArray(100000) {
        Random.nextInt()
    }
    val compareCount = randomArray.mergeSort()
    println("Compare Count: $compareCount")
}
