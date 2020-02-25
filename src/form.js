const form = () => {
  const formhtml = ` <form id="cc-contact" action="" method="post">
    <input placeholder="your name" type="text" tabindex="1" autofocus>
    <input placeholder="Email Address" type="email" tabindex="2" required>
    <input placeholder="Phone Number" type="tel" tabindex="3" required>
    <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
  </form>`;
  return formhtml;
};


export default form;