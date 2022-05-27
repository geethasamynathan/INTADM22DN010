namespace AdminAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Admins",
                c => new
                    {
                        admin_id = c.Int(nullable: false, identity: true),
                        fname = c.String(),
                        lname = c.String(),
                        gender = c.String(),
                        age = c.Int(nullable: false),
                        Admin_Email = c.String(),
                        Phone_No = c.Int(nullable: false),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.admin_id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Admins");
        }
    }
}
