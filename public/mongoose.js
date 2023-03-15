//초기 todo list 로딩
getList()
//todo list 로딩
async function getList() {
    try {
      const res = await axios.get('/todo');
      const todos = res.data;
      const todolist = document.querySelector('#myUL');
      todolist.innerHTML = '';
      todos.map(function (todo) {
        // 로우 셀 추가
        let row = document.createElement('li');
        let span=document.createElement('span');
        row.textContent = todo.txt;
        span.textContent= 'x';
        span.className = "close";
        row.appendChild(span);
        todolist.appendChild(row);
        span.addEventListener('click',async () => {
          try {
            
            console.log(`${todo._id}`);
            await axios.delete(`/todo/${todo._id}`);
            getList();
          } catch (err) {
            console.error(err);
          }
        })
      });
    } catch (err) {
      console.error(err);
    }
  }

// todo list 추가
document.getElementById('todo-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const check = false;
  const txt = e.target.txt.value;
  if (!txt) {
    return alert('내용을 입력해주세요');
  }
  try {
    await axios.post('/todo', { check,txt });
    getList();
  } catch (err) {
    console.error(err);
  }
  e.target.txt.value = '';
});
