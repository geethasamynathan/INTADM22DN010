namespace UserAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial1 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.UserAccounts", "Phone_No", c => c.Long(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.UserAccounts", "Phone_No", c => c.Int(nullable: false));
        }
    }
}
