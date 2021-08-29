function verifLogin()
{   
   // document.getElementById("messageErreur").innerHTML = "Hello";

   var user=["alibensalah@gmail.com","kokosteam@yahoo.fr","halloe@hotmail.com"];
   var mdp=["ali007","koko123","jamousi995"];

   
   var login;
   var password;
   login=document.getElementById("login").value;
   password=document.getElementById("password").value;


   if((login=="") || (password=="")){
      document.getElementById("messageErreur").innerHTML = "*Veuillez saisir tous les champs";

   }
   else
   {
      var exist=false;
      for(var i=0;i<user.length;i++)
      {
         if(user[i]==login)
         {
            exist=true;
            break;
         }
      }
      if(exist==false)
      {
         document.getElementById("messageErreur").innerHTML = "*Login n'existe pas";
      }
      else
      {
         if(mdp[i]!=password)
         {
            document.getElementById("messageErreur").innerHTML = "*mot de passe est incorrect";
         }

         else
         {
            location.replace("index.html");
         }
      }



   }

  
   //login = document.getElementById("login").value;
   console.log(login);
   

}

function verifPassCommande()
{
   if(document.getElementById("quantity")==null)
   alert("Veuiller choisir un nombre");

}

function verifFormulaire()
{
   var nom=document.getElementById("nom").value;
   var prenom=document.getElementById("prenom").value;
   var mail=document.getElementById("mail").value;
   var password=document.getElementById("password").value;
   var confirmpassword=document.getElementById("confirmpassword").value;
   var numtel=document.getElementById("numtel").value;
   var confirmercondition=document.getElementById("confirmercondition").value;

   
   var regexMail=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/  //c'est la formule de regex qui permet de verifier si le mail qui a été saisi est valide ou non
   var mailIsExisting=regexMail.test(mail);
   var regexNomOuPrenom=/[a-zA-Z]/;
   var nomIsExisiting=regexNomOuPrenom.test(nom);
   var prenomIsExisiting=regexNomOuPrenom.test(prenom);
   var regexTelifoun =/[0-9]/;
   var telifounExist=regexTelifoun.test(numtel);

   if(nom=="")
      {
         document.getElementById("messageErreur").innerHTML = "*Remplir le champ nom";

      }
   else if(prenom=="")
      {
         document.getElementById("messageErreur").innerHTML = "*Remplir le champ prenom";
      }
      else if(mail=="")
      {
         document.getElementById("messageErreur").innerHTML = "*Remplir le champ mail";
      }
      else if(password=="")
      {
         document.getElementById("messageErreur").innerHTML = "*Remplir le champ du mot de passe";
      }
      else if(confirmpassword=="")
      {
         document.getElementById("messageErreur").innerHTML = "*Remplir le champ de confirmation de mot de passe";
      }
      else if(numtel=="")
      {
         document.getElementById("messageErreur").innerHTML = "*Remplir le champ numtel";
      }
      else if(prenom=="")
      {
         document.getElementById("messageErreur").innerHTML = "*Remplir le champ prenom";
      }



      else if(document.getElementById("confirmercondition").checked==false)
      {
         document.getElementById("messageErreur").innerHTML = "*Accepter les conditions d'utilisation";
      }
      else if(nomIsExisiting==false)
      {
         document.getElementById("messageErreur").innerHTML = "*Le nom est invalide";
      }
      else if(prenomIsExisiting==false)
      {
         document.getElementById("messageErreur").innerHTML = "*Le prénom est invalide";
      }
      else if(mailIsExisting==false)
      {
         document.getElementById("messageErreur").innerHTML = "*le mail est invalide";
      }
      else if(telifounExist==false)
      {
         document.getElementById("messageErreur").innerHTML = "*le numéro de téléphone est invalide";
      }
      else if(password!=confirmpassword)
      {
         document.getElementById("messageErreur").innerHTML = "*Le mot de passe n'est pas bien confirmé";
      }
      else
      {
         location.replace("index.html");
      }

    console.log(confirmercondition);
      
}

function redirect()
 {location.replace("thanks.html");}