  # AngularDynamicMenuPartialView

  Utilizei tudo recursos do AngularJS, os c�digos est�o comentados =)

  Criei esta tabela no prorio projeto(SQL Server DataBase)
  ```
  CREATE TABLE [dbo].[Menu] (
      [ID]       INT           IDENTITY (1, 1) NOT NULL,
      [Name]     VARCHAR (50)  NOT NULL,
      [Url]      VARCHAR (200) NULL,
      [ParentID] INT           NOT NULL,
      PRIMARY KEY CLUSTERED ([ID] ASC)
  );

  SET IDENTITY_INSERT [dbo].[Menu] ON
  INSERT INTO [dbo].[Menu] ([ID], [Name], [Url], [ParentID]) VALUES (1, N'Consulta', N'#', 0)
  INSERT INTO [dbo].[Menu] ([ID], [Name], [Url], [ParentID]) VALUES (2, N'Cont�iner', N'ConsultaConteiner', 1)
  INSERT INTO [dbo].[Menu] ([ID], [Name], [Url], [ParentID]) VALUES (4, N'Processos', N'#', 0)
  INSERT INTO [dbo].[Menu] ([ID], [Name], [Url], [ParentID]) VALUES (5, N'Averba��o', N'ProcessoAverbacao', 4)
  INSERT INTO [dbo].[Menu] ([ID], [Name], [Url], [ParentID]) VALUES (6, N'Booking', N'ConsultaBooking', 1)
  INSERT INTO [dbo].[Menu] ([ID], [Name], [Url], [ParentID]) VALUES (7, N'BL', N'ConsultaBL', 1)
  SET IDENTITY_INSERT [dbo].[Menu] OFF


  ```


  Para funcionar no EOL, alterar o m�todo GetSiteMenu() da classe HomeController, pegar direto pelo repositorio e adequar a Index.cshtml, pra preencher o menu na tela...
