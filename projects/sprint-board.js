class SprintBoard {
  constructor(goal){ this.goal=goal; this.items=[]; }
  addStory(title, points){ this.items.push({title,points,state:'todo'}); }
  move(title,state){ const item=this.items.find(story=>story.title===title); if(!item) throw Error('story not found'); item.state=state; }
  summary(){ return this.items.reduce((result,item)=>(result[item.state]++,result),{todo:0,doing:0,done:0}); }
}
if(require.main===module){const board=new SprintBoard('Release MVP');board.addStory('Create task',3);board.move('Create task','done');console.log(board.summary());}
module.exports={SprintBoard};