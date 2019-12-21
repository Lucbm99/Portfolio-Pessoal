<?php

if(isset($_POST['nome']) && !empty($_POST['nome'])){
    $nome=addslashes($_POST['nome']);
    $email=addslashes($_POST['email']);
    $fone=addslashes($_POST['fone']);
    $mensagem=addslashes($_POST['mensagem']);


    $para="contato@lucasbmarchiori.com.br";
    $assunto="Contato - Site Portfolio";
    $corpo = "Nome = $nome \n"; 
    $corpo .= "Email = $email \n";
    $corpo .= "Telefone = $fone \n"; 
    $corpo .= "Mensagem = $mensagem \n";

                "X-Mailer: PHP/".phpversion();
    mail($para, $assunto, $corpo);
    echo 
    "<script>
    alert('E-mail enviado com sucesso! Em breve, entrarei em contato.');
    window.location.href='index.html';
    </script>";
}
?>