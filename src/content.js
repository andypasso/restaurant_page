const content = () => {
  const contenthtml = `
    <div class="flex">
    
      <img id="astronaut" src="../images/atronaut.png">
      <h1>
          Space Burgers<br>
          Hamburguesas, posta
      </h1>
  </div>


    <div class="cctabs">
      <input checked id="one" name="tabs" type="radio">
      <label for="one"><i class="fa fa-pencil-square-o"></i> Home </label>
      <input id="two" name="tabs" type="radio" value="Two">
      <label for="two"><i class="fa fa-magic"></i> Menu</label>
      <input id="three" name="tabs" type="radio">
      <label for="three"><i class="fa fa-plus-square"></i> Contact </label>
      <div class="panels">
          <div class="panel" id='homeid'>

          </div>
          <div class="panel"id='menuid'>
            
          </div>
          <div class="panel" id='formid'>
           
          </div> 
      </div>
  </div>`;
  return contenthtml;
};

export default content;