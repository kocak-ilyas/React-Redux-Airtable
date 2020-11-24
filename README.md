React-Redux-Airtable
Shopping Cart

<!-- button is Blue:active -->
<Button active={state.category.id===cart.fields.id}>seçileni maviye boya</Button>

<!-- go to form -->
 <Link to="form">
        <Badge color="warning">Go to Form</Badge>
</Link> 
<!-- go to home page -->      
      <Link to="">
        <Badge color="warning">Go to HomePage</Badge>
      </Link>

<!-- go to form return içi olsaydı JSX ile yazacaktık -->      
      <Link to={"/form"}>
        <Badge color="warning">Go to HomePage</Badge>
      </Link>

fonksiyonları, divleri(length===0 gibi) ve action ları return içi yerine yukarıda bir fonksiyon olarak tanımla ki makarna olmasın