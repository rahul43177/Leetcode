class Solution:
    def check(self, nums: List[int]) -> bool:
        dropCount = 0
        n = len(nums)
        for i in range(n):
            if nums[i] > nums[(i+1)%n]:
                dropCount+=1
        if dropCount > 1:
            return False 
        return True 