---
outline: deep
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://img0.baidu.com/it/u=2897227376,4164167746&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    name: '何蓉',
    title: '创作者',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://img0.baidu.com/it/u=2897227376,4164167746&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    name: '张舒玥',
    title: '创作者',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      单枪匹马向前冲
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

