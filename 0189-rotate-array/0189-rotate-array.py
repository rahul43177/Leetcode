class Solution:
    def rotate(self, arr: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        temp = arr.copy()
        n = len(arr)
        for i in range(n) :
            newIndex = (i+k)%n
            arr[newIndex] = temp[i] 
        return arr