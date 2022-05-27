namespace FlightAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Flights", "Flight_Status", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Flights", "Flight_Status");
        }
    }
}
