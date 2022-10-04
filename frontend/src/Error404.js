function Error404() {
  return (
    <main>
      <h1>404: PAGE NOT FOUND</h1>
      <p>Oops, sorry, we can't find this page!  (I probably just messed up my code, so please try again later)</p>
      <img
        src="http://localhost:5000/images/kittykat.jpeg"
        alt="cute cat pic since we can't show you what you REALLY want to see"
      />
    </main>
  );
}

export default Error404;
