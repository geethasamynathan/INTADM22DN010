namespace BookingAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
           
            CreateTable(
                "dbo.Tickets",
                c => new
                    {
                        Ticket_id = c.Int(nullable: false, identity: true),
                        Flight_Id = c.Int(nullable: false),
                        User_id = c.Int(nullable: false),
                        No_Of_Seats = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Ticket_id)
                .ForeignKey("dbo.Flights", t => t.Flight_Id, cascadeDelete: true)
                .ForeignKey("dbo.UserAccounts", t => t.User_id, cascadeDelete: true)
                .Index(t => t.Flight_Id)
                .Index(t => t.User_id);
            
            
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Tickets", "User_id", "dbo.UserAccounts");
            DropForeignKey("dbo.Tickets", "Flight_Id", "dbo.Flights");
            DropForeignKey("dbo.Flights", "Aircraft_id", "dbo.Aircraft");
            DropIndex("dbo.Tickets", new[] { "User_id" });
            DropIndex("dbo.Tickets", new[] { "Flight_Id" });
            DropIndex("dbo.Flights", new[] { "Aircraft_id" });
            DropTable("dbo.UserAccounts");
            DropTable("dbo.Tickets");
            DropTable("dbo.Flights");
            DropTable("dbo.Aircraft");
        }
    }
}
