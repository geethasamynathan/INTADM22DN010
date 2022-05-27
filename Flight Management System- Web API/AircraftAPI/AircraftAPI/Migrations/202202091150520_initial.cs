namespace AircraftAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Aircraft",
                c => new
                    {
                        Aircraft_id = c.Int(nullable: false, identity: true),
                        Aircraft_Name = c.String(),
                        Total_Seats = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Aircraft_id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Aircraft");
        }
    }
}
