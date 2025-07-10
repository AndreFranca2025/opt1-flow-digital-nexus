# Configuração do Chatwoot

## Passos para Configurar o Chatwoot

### 1. Adicionar o Script do Chatwoot no HTML

Adicione este script no arquivo `index.html` antes do fechamento da tag `</body>`:

```html
<script>
(function(d,t) {
  var BASE_URL="SUA_URL_CHATWOOT";
  var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
  g.src=BASE_URL+"/packs/js/sdk.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g,s);
  g.onload=function(){
    window.chatwootSDK.run({
      websiteToken: 'SEU_WEBSITE_TOKEN',
      baseUrl: 'SUA_URL_CHATWOOT'
    })
  }
})(document,"script");
</script>
```

### 2. Configurações Necessárias

Você precisa das seguintes informações do seu Chatwoot:

- **BASE_URL**: URL da sua instância do Chatwoot (ex: `https://app.chatwoot.com`)
- **WEBSITE_TOKEN**: Token do seu website no Chatwoot (encontrado em Settings > Inboxes > Website)

### 3. Exemplo Completo de Configuração

```html
<script>
(function(d,t) {
  var BASE_URL="https://app.chatwoot.com";
  var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
  g.src=BASE_URL+"/packs/js/sdk.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g,s);
  g.onload=function(){
    window.chatwootSDK.run({
      websiteToken: 'seu-token-aqui',
      baseUrl: 'https://app.chatwoot.com'
    })
  }
})(document,"script");
</script>
```

### 4. Personalização Adicional (Opcional)

Você pode personalizar o widget com estas opções:

```javascript
window.chatwootSDK.run({
  websiteToken: 'seu-token-aqui',
  baseUrl: 'https://app.chatwoot.com',
  
  // Personalização opcional
  locale: 'pt_BR',
  type: 'standard',
  launcherTitle: 'Chat conosco',
  showPopoutButton: true,
  position: 'right',
  
  // Configurar usuário automaticamente (se disponível)
  user: {
    identifier: 'user@email.com',
    name: 'Nome do Usuário',
    email: 'user@email.com'
  }
});
```

### 5. Como Obter suas Configurações

1. **Acesse seu painel do Chatwoot**
2. **Vá em Settings > Inboxes**
3. **Selecione seu inbox do Website**
4. **Copie o Website Token**
5. **Use a URL base da sua instância**

### 6. Configurações de Estilo (Opcional)

Para esconder o widget padrão do Chatwoot (já que temos nosso próprio botão):

```css
.woot-widget-holder {
  display: none !important;
}
```

## Status Atual

✅ Ícone alterado para atendente (UserRound)
✅ Botão flutuante configurado
✅ Seção de contato atualizada
⏳ Aguardando configuração do script com seus dados reais

## Próximos Passos

1. Forneça sua URL do Chatwoot e Website Token
2. Adicione o script no index.html
3. Teste o funcionamento do chat