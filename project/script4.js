var arr = [
    {
        dp:"https://imgs.search.brave.com/gMORAbao6qQJnm53DIssuCVVlfMAmpSROBSl8emTiww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFxV1BCNEJBckwu/anBn",
        story:"https://imgs.search.brave.com/7tAneyipCnMV78QHY5H7pi_Bfzd6roKgWW1HAAO0gaU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGFpbHlwaW9uZWVy/LmNvbS91cGxvYWRz/LzIwMjMvc3Rvcnkv/aW1hZ2VzL21lZGl1/bS9SMzAwX2tvaGxp/LWluLWZvY3VzLWFz/LXJjYi1wbGF5LXNy/aC1pbi1tdXN0LXdp/bi1nYW1lLTIwMjMt/MDUtMTcuanBn"
    },
    {
        dp:"https://imgs.search.brave.com/GuxuWNtuLPJCjrtgj9d1hIIM_bQPmZwiP8JiImGFAfU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRmL1lhc2hfcHJv/bW90aW5nX0tHRl8y/LmpwZw",
        story:"https://imgs.search.brave.com/yqNWLvRR_oYXkCOqBVNbPOhVyEV9D7fU_R3el1rYb24/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLm5k/dHZpbWcuY29tLzIw/MjItMDkvbWY0ZWls/MHNfeWFzaC1nZXR0/eV82MjV4MzAwXzEy/X1NlcHRlbWJlcl8y/Mi5qcGc_aW09RmFj/ZUNyb3AsYWxnb3Jp/dGhtPWRubix3aWR0/aD01NDAsaGVpZ2h0/PTcyMA"
    },
    {
        dp:"https://imgs.search.brave.com/dejDoRN6-D9rIW0z1rTOXKXFmyJs_URqwEms3Irmtt0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQwMjQ2/NjIuanBn",
        story:"https://imgs.search.brave.com/xl4C74TSg-RTXRkvd-ltQ5m891zgdpPy4P_gGL8hoDE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3JpY3RyYWNrZXIu/Y29tL19uZXh0L2lt/YWdlLz91cmw9aHR0/cHM6Ly9tZWRpYS5j/cmljdHJhY2tlci5j/b20vbWVkaWEvYXR0/YWNobWVudHMvMTY5/MzcxNjU3NTI0MV9T/aGFoYmF6LVNoYXJp/Zi1hbmQtU2hhaGVl/bi1TaGFoLUFmcmlk/aS5qcGVnJnc9MTkw/MCZxPTc1"
    },
    {
        dp:"https://imgs.search.brave.com/MnIiBVdPPUHFNfgTvKxcY6xsKpA8byMC95fN-cnsJ6o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODkx/ODkzNjIyL3Bob3Rv/L2J1cmota2hhbGlm/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9VUpPcUxaVExn/YjdZR3lFLUlKV0pI/MDI1UFlycEYydjI2/eEZGbHc3bzJCMD0",
        story:"https://imgs.search.brave.com/TBzjoLJLcoUgUn6bIkaVVfJ3qZ32ik5SwnXaCeaqd68/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzI4LzUxLzU4/LzM2MF9GXzMyODUx/NTgwOV9JcmFZS29Y/OTJtMzRpcE1rVk9x/YmcwWlJlVTVQODNr/SC5qcGc"
    },
]


var storys = document.querySelector("#stories")

var clutter = ""
arr.forEach(function(elem,idx){
   clutter +=`<div class="story">
   <img id="${idx}" src="${elem.dp}" alt="" srcset="">
</div>`
})
storys.innerHTML = clutter

storys.addEventListener("click",function(dets){
  document.querySelector("#full-screen").style.display="block"
  document.querySelector("#full-screen").style.backgroundImage = `url(${  arr[dets.target.id].story})`

  setTimeout(function(){
    document.querySelector("#full-screen").style.display="none"
  },3000)
});