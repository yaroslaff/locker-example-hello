
locker = new Locker(locker_addr)

window.onload = async () => {
  locker.hook_login = load_data
  document.getElementById('authentication').style.display = 'block'
  locker.check_login()  
}


async function load_data(){
  draw_profile()
}

async function draw_profile(){
  locker.get_json_file('~/r/userinfo.json', data => {
    document.getElementById("profile").innerText = `Hello, ${data['name']} <${data['email']}>!`
  })
}

async function logout(){
  locker.logout()
}

function f1(){
  alert('f1')
}
function f2(){
  alert('f2')
}
function f3(){
  alert('f3')
}
