namespace UserAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.UserAccounts",
                c => new
                    {
                        User_id = c.Int(nullable: false, identity: true),
                        Fname = c.String(),
                        Lname = c.String(),
                        gender = c.String(),
                        age = c.Int(nullable: false),
                        User_Email = c.String(),
                        Phone_No = c.Int(nullable: false),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.User_id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.UserAccounts");
        }
    }
}
