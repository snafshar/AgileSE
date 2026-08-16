class FocusDesk {
  constructor(){ this.tasks=[]; }
  addTask(title, priority='normal'){ if(!title.trim()) throw Error('title required'); const task={id:this.tasks.length+1,title,priority,done:false}; this.tasks.push(task); return task; }
  complete(id){ const task=this.tasks.find(item=>item.id===id); if(!task) throw Error('unknown task'); task.done=true; return task; }
  progress(){ return this.tasks.length ? this.tasks.filter(task=>task.done).length/this.tasks.length : 0; }
}
if(require.main===module){const app=new FocusDesk();const task=app.addTask('Implement vertical slice','high');app.complete(task.id);console.log(app.progress());}
module.exports={FocusDesk};