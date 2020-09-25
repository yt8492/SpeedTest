package com.yt8492.speedtest.common

fun IntArray.mergeSort(): Int {
    return this.mergeSort(0, this.size)
}

fun IntArray.mergeSort(left: Int, right: Int): Int {
    var cnt = 0
    if (left + 1 < right) {
        val mid = (left + right) / 2
        cnt += this.mergeSort(left, mid)
        cnt += this.mergeSort(mid, right)
        cnt += this.merge(left, mid, right)
    }
    return cnt
}

fun IntArray.merge(left: Int, mid: Int, right: Int): Int {
    var cnt = 0
    val array1 = IntArray((mid - left) + 1)
    val array2 = IntArray((right - mid) + 1)
    for (i in 0 until array1.size - 1) {
        array1[i] = this[left + i]
    }
    for (i in 0 until array2.size - 1) {
        array2[i] = this[mid + i]
    }
    array1[array1.lastIndex] = Int.MAX_VALUE
    array2[array2.lastIndex] = Int.MAX_VALUE
    var i = 0
    var j = 0
    for (k in left until right) {
        this[k] = if (array1[i] < array2[j]) {
            array1[i++]
        } else {
            array2[j++]
        }
        cnt++
    }
    return cnt
}